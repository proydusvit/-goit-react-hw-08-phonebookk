import style from 'components/Filter/filter.module.css'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { deleteContact} from 'redux/operation/operation';
import { selectFilterdContacts } from 'redux/selectors';
import DeleteIcon from '@mui/icons-material/Delete';


export default function ContactList() {
    // const { isLoading } = useSelector(selectContacts);
    const dispatch = useDispatch();  
    const contacts = useSelector(selectFilterdContacts);
    // const { isLoading } = useSelector(selectContacts);
    


    const removeContact = (id) => {
        const action = deleteContact(id);
        dispatch(action);
        if (contacts.length === 1) {
            dispatch(setFilter(""));
            
         alert('No more contacts matching the filter.');
       }   
     }  
    
     


    const elem = contacts.map(({ name, number , id}) => {
        return  <li key={id}>    {name} , {number}  
            <DeleteIcon className={style.icon} color="error" size="small"  fontSize="inherit" onClick={() => removeContact(id)} />
     
          </li> 
          
    })
    return (
        <div className={style.box}>
            <h3>Contacts</h3>
            <ol>{elem}</ol>

        </div>
    )

    }

ContactList.prototype = {
     items: PropTypes.arrayOf(
         PropTypes.shape({
             id: PropTypes.string.isRequired,
             number: PropTypes.string.isRequired,
             name: PropTypes.string.isRequired,
             
        })).isRequired

}