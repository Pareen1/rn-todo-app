import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    };

    function addGoalHandler() {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/computer-icons-goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='CANCEL'
                            onPress={props.closeModal}
                            color={'red'}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='ADD'
                            onPress={addGoalHandler}
                            color={'#9BDBFA'}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        padding: 16,
        backgroundColor: '#311b6b',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#9BDBFA',
        backgroundColor: '#9BDBFA',
        borderRadius: 8,
        width: '100%',
        marginRight: 8,
        padding: 16,
    },
    buttonContainer: {
        marginTop: 8,
        flexDirection: 'row',
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
});