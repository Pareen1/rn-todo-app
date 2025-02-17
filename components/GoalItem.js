import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={({ pressed }) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
    },
});