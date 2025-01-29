
import { HomeModernIcon, BriefcaseIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

const CategoryIcon = ({iconName, className = '', ...props}) => {

    const icons = {
        HomeModernIcon: HomeModernIcon,
        BriefcaseIcon: BriefcaseIcon,
        ClipboardDocumentListIcon: ClipboardDocumentListIcon,
    };

    const IconComponent = icons[iconName];

    return IconComponent ? <IconComponent className={className} {...props}/> : null;
}

export default CategoryIcon
