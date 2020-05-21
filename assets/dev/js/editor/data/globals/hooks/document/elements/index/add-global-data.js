import After from 'elementor-api/modules/hooks/data/after';

export class ElementsIndexAddGlobalData extends After {
	getCommand() {
		return 'editor/documents/elements';
	}

	getConditions( args, result ) {
		// TODO: Remove - Create testing compatibility.
		// TODO: Extend Hooks Create hooks for data, and add getType ( get, post, etc ).
		return ! elementorCommonConfig.isTesting && 'get' === args.options.type && result?.data?.settings?.__globals__;
	}

	getId() {
		return 'editor/documents/elements::add-global-data';
	}

	apply( args, result ) {
		const element = result.data;

		return Object.entries( element.settings.__globals__ ).map( async ( [ globalKey, globalValue ] ) => {
			// Means, the control default value were disabled.
			if ( ! globalValue ) {
				return;
			}
			// Get global item.
			const newArgs = { query: {} },
				endpointResult = await $e.data.get( $e.data.endpointToCommand( globalValue, newArgs ), newArgs.query ),
				container = elementor.getContainer( args.query.elementId ),
				data = endpointResult.data,
				controlGroupPrefix = container.controls[ globalKey ]?.groupPrefix;

			// it's a global settings with additional controls in group.
			if ( controlGroupPrefix ) {
				Object.values( container.controls ).map( ( control ) => {
					if ( control.groupPrefix === controlGroupPrefix ) {
						// The controls name (like `typography_font_family) is not equal to the global data control name (like `font_family`), duo to it's group prefix, like <typography_>font_family.
						const baseName = control.name.replace( control.groupPrefix, '' );
						if ( data[ baseName ] ) {
							element.settings[ control.name ] = data[ baseName ];
						}
					}
				} );
			} else {
				element.settings[ globalKey ] = data;
			}
		} );
	}
}

export default ElementsIndexAddGlobalData;
