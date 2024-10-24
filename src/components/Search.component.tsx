import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
    placeholder: string;
    onSearch: (searchTerm: string) => void;
}

const SearchComponent = ({ placeholder, onSearch }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const hanldeSearch = () => {
        onSearch(searchTerm);
        setSearchTerm('');
    }
    
    return(
        <View>
            <TextInput 
            style={styles.searchInput} 
            placeholder={placeholder}
            value={searchTerm}
            onChangeText={setSearchTerm}
            onSubmitEditing={hanldeSearch} />
        </View>
    )
}

export default SearchComponent;

const styles = StyleSheet.create({
    searchInput: {
        height: 40,
        backgroundColor: '#D9D9D9',
        borderRadius: 25,
        fontSize: 12,
        textAlign: 'center'
    }
})