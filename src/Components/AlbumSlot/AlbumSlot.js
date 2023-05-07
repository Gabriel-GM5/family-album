import './AlbumSlot.scss';
import Figure from 'react-bootstrap/Figure';

function AlbumSlot(imageProps) {
    const {props} = imageProps;

    return (
        <Figure className='albumSlotFigure'>
            <Figure.Image
                src={props.imagePath}
            />
            <Figure.Caption>
                {props.imageSubTitle}
            </Figure.Caption>
        </Figure>
    );
}

export default AlbumSlot;