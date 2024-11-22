import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const HomeScreen = ({ navigation }) => {
  const [chefDishes, setChefDishes] = useState([
    {
      id: 1,
      name: "Chef's Special Burger",
      description: "A delightful burger with fresh ingredients and house-made sauce.",
      price: 85.99,
    },
    {
      id: 2,
      name: "Crab Leg with Cheese",
      description: "Freshly grilled crab legs with a side of garlic butter.",
      price: 120.49,
    },
  ]);

  const [newDish, setNewDish] = useState({ name: '', description: '', price: '' });
  const [selectedDishId, setSelectedDishId] = useState(chefDishes[0]?.id || null);

  const calculateAveragePrice = () => {
    if (chefDishes.length === 0) return 0;
    const total = chefDishes.reduce((sum, dish) => sum + (dish.price || 0), 0);
    return (total / chefDishes.length).toFixed(2);
  };

  const addDish = () => {
    if (newDish.name && newDish.description && newDish.price) {
      const updatedDishes = [
        ...chefDishes,
        { id: chefDishes.length + 1, ...newDish, price: parseFloat(newDish.price) },
      ];
      setChefDishes(updatedDishes);
      setNewDish({ name: '', description: '', price: '' });
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  const removeDish = (id) => {
    const updatedDishes = chefDishes.filter((dish) => dish.id !== id);
    setChefDishes(updatedDishes);
    if (selectedDishId === id) setSelectedDishId(null);
  };

  const selectedDish = chefDishes.find((dish) => dish.id === selectedDishId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our Restaurant!</Text>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Select a Dish</Text>
        <Picker
          selectedValue={selectedDishId}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedDishId(itemValue)}
        >
          {chefDishes.map((dish) => (
            <Picker.Item key={dish.id} label={dish.name} value={dish.id} />
          ))}
        </Picker>

        {selectedDish && (
          <View style={styles.dishContainer}>
            <Text style={styles.dishTitle}>{selectedDish.name}</Text>
            <Text style={styles.dishDescription}>{selectedDish.description}</Text>
            <Text style={styles.dishPrice}>Price: R{selectedDish.price.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeDish(selectedDish.id)}
            >
              <Text style={styles.removeButtonText}>Remove Dish</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Add a New Dish</Text>
        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          value={newDish.name}
          onChangeText={(text) => setNewDish({ ...newDish, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={newDish.description}
          onChangeText={(text) => setNewDish({ ...newDish, description: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Price (e.g., 100.00)"
          value={newDish.price}
          keyboardType="numeric"
          onChangeText={(text) => setNewDish({ ...newDish, price: text })}
        />
        <TouchableOpacity style={styles.addButton} onPress={addDish}>
          <Text style={styles.addButtonText}>Add Dish</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.averagePrice}>
        <Text style={styles.averageText}>Average price: R{calculateAveragePrice()}</Text>
      </View>

      <TouchableOpacity
        style={styles.orderButton}
        onPress={() => navigation.navigate('Menu', { dishes: chefDishes })}
      >
        <Text style={styles.orderButtonText}>View Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8F8F5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2C3E50',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495E',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    backgroundColor: '#D5DBDB',
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  dishContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#F2F4F4',
    borderRadius: 8,
    alignItems: 'center',
  },
  dishTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1ABC9C',
  },
  dishDescription: {
    fontSize: 14,
    color: '#7F8C8D',
    marginTop: 5,
  },
  dishPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34495E',
    marginTop: 5,
  },
  input: {
    height: 40,
    borderColor: '#BDC3C7',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#1ABC9C',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#E74C3C',
    paddingVertical: 8,
    borderRadius: 5,
    marginTop: 10,
  },
  removeButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  orderButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  averagePrice: {
    marginTop: 10,
    alignItems: 'center',
  },
  averageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
});

export default HomeScreen;
