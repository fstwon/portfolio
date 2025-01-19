import { ReactNode } from 'react';
import './companyName.style.scss';
import { LinkButton } from '../../../../../../../../../../components/linkButton/linkButton.component';
import { LinkIcon } from '../../../../../../../../../../resource/svg/linkIcon/link.icon';

interface IProps {
	children: ReactNode;
	link?: string | undefined;
}

export function CompanyName({ children, link }: IProps): ReactNode {
	return (
		<div className='resume_career_item_company_title_container'>
			{children}
			{link ? (
				<LinkButton
					className='resume_career_item_company_link'
					to={link}
				>
					<LinkIcon className='resume_career_item_company_link_icon' />
				</LinkButton>
			) : (
				<></>
			)}
		</div>
	);
}
