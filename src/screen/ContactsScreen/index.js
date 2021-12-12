import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import contacts from '../../../assets/data/contacts.json';
const index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredcontacts, setfilteredcontacts] = useState(contacts);

  useEffect(() => {
    const newContacts = contacts.filter(
      contact =>
        contact.user_display_name.toLowerCase().includes (searchTerm.toLowerCase())
    );
    setfilteredcontacts(newContacts);
  }, [searchTerm]);
  return (
    <View style={styles.page}>
      <TextInput
        style={styles.searchInput}
        placeholder="search"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredcontacts}
        renderItem={({item}) => (
          <Text style={styles.contactName}>{item.user_display_name}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {
    padding: 15,
  },
  contactName: {
    fontSize: 16,
    marginVertical: 10,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
  },
});
