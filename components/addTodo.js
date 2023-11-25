import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTOdo ( {submitHandler} ) {
    const [text, setText] =  useState("");

    const changeHandler= (val) => {
        setText(val)
    }

    const clearText= () => {
        if(text.length > 3) {
            setText("")
        }
        
    }


    return(
        <View>
            <TextInput 
            style={styles.input}
                placeholder='Inserisci testo..'
                onChangeText= {changeHandler}
                value={text}
            />
        <Button  onPress={() =>{ submitHandler(text); clearText()} } color="coral"  title="add todo">  </Button>
        </View>
    )
}

const styles = StyleSheet.create ({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd" 
    }

})