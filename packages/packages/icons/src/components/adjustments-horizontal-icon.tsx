import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@elementor/ui';

const AdjustmentsHorizontalIcon = React.forwardRef( ( props: SvgIconProps, ref ) => {
	return (
		<SvgIcon viewBox="0 0 24 24" { ...props } ref={ ref }>
			<path fillRule="evenodd" clipRule="evenodd" d="M14 4.75C13.3096 4.75 12.75 5.30964 12.75 6C12.75 6.69036 13.3096 7.25 14 7.25C14.6904 7.25 15.25 6.69036 15.25 6C15.25 5.30964 14.6904 4.75 14 4.75ZM11.3535 5.25C11.68 4.09575 12.7412 3.25 14 3.25C15.2588 3.25 16.32 4.09575 16.6465 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H16.6465C16.32 7.90425 15.2588 8.75 14 8.75C12.7412 8.75 11.68 7.90425 11.3535 6.75H4C3.58579 6.75 3.25 6.41421 3.25 6C3.25 5.58579 3.58579 5.25 4 5.25H11.3535ZM8 10.75C7.30964 10.75 6.75 11.3096 6.75 12C6.75 12.6904 7.30964 13.25 8 13.25C8.69036 13.25 9.25 12.6904 9.25 12C9.25 11.3096 8.69036 10.75 8 10.75ZM5.35352 11.25C5.67998 10.0957 6.74122 9.25 8 9.25C9.25878 9.25 10.32 10.0957 10.6465 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H10.6465C10.32 13.9043 9.25878 14.75 8 14.75C6.74122 14.75 5.67998 13.9043 5.35352 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H5.35352ZM17 16.75C16.3096 16.75 15.75 17.3096 15.75 18C15.75 18.6904 16.3096 19.25 17 19.25C17.6904 19.25 18.25 18.6904 18.25 18C18.25 17.3096 17.6904 16.75 17 16.75ZM14.3535 17.25C14.68 16.0957 15.7412 15.25 17 15.25C18.2588 15.25 19.32 16.0957 19.6465 17.25H20C20.4142 17.25 20.75 17.5858 20.75 18C20.75 18.4142 20.4142 18.75 20 18.75H19.6465C19.32 19.9043 18.2588 20.75 17 20.75C15.7412 20.75 14.68 19.9043 14.3535 18.75H4C3.58579 18.75 3.25 18.4142 3.25 18C3.25 17.5858 3.58579 17.25 4 17.25H14.3535Z" />
		</SvgIcon>
	);
} );

export default AdjustmentsHorizontalIcon;