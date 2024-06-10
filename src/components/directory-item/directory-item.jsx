import { useNavigate } from 'react-router-dom';

import { DirectoryItemContainer, BackgroundImage, Body } from './directory-items.style'

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category
    const Navigate = useNavigate();
    const onNavigateHandler = () => Navigate(route);
    return ( 
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageurl = {imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop now</p>
            </Body>
        </DirectoryItemContainer>
    );
}
export default DirectoryItem;