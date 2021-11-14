import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function DropDown({ title = 'Título de Ejemplo', info = 'Contenido de Ejemplo', img = <img src="" alt="no imagen" /> }) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <span className='sm:text-xl md:text-3xl  font-semibold px-5'>{title}</span>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='container mx-auto px-12'>
                        <div className="flex justify-center">
                            {img}
                        </div>
                    </div>
                    <div className='text-lg'>
                        {info}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default DropDown;