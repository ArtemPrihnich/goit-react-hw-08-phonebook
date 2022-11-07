import { useEffect } from 'react'
// import { Button, Item, List } from './ContactsList.styled'
import { useSelector, useDispatch } from 'react-redux'
import { fetchContacts } from "redux/contacts/contacts-operations";
import { getError, getFilteredContacts, getIsLoading } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';
import Loader from 'components/Loader/Loader';
import ErrorNotify from 'components/ErrorNotify/ErrorNotify';

export default function ContactsList() {
    const contacts = useSelector(getFilteredContacts)
    const loading = useSelector(getIsLoading)
    const error = useSelector(getError)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const removeContact = (id) => {
        const action = deleteContact(id);
        dispatch(action);
    }

    return (
        <ul>
            {loading && <Loader />}
            {!error && !loading && contacts?.map(({ name, phone, id }) => {
                return (
                    <li key={id}>{name}: {phone} <button onClick={() => removeContact(id)}>delete</button></li>
                )
            })}
            {!loading && error && <ErrorNotify />}
        </ul>
    )
}
