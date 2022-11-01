export const getIsLoading = state => state.items.contacts.isLoading

export const getError = state => state.items.contacts.error

export const getFilteredContacts = ({ items }) => {   
  const contacts = items.contacts.items
  const filter = items.filter
    if (!filter) {
      return contacts
    }

  const filteredContacts = contacts.filter(({ name, phone }) => {
      const result = name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || phone.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      return result
    })

    return filteredContacts
}