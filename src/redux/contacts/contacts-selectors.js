export const getIsLoading = state => state.contacts.isLoading

export const getItems = state => state.contacts.items

export const getError = state => state.contacts.error

export const getFilteredContacts = ({ contacts, filter }) => {   
  const contactss = contacts.items
  const filterr = filter
    if (!filterr) {
      return contactss
    }

  const filteredContacts = contactss.filter(({ name, number }) => {
      const result = name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || number.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      return result
    })

    return filteredContacts
}