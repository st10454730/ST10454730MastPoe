import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Sample data for cuisines and their menu items
const menuData = {
  Starter: [
    { id: '1', name: 'Chicken Salad', price: 50 },
    { id: '2', name: 'Crab Legs wiath Cheese', price: 150 },
    { id: '3', name: 'Fried Tofu', price: 70 },
    { id: '4', name: 'Samosas', price: 50 },
    { id: '5', name: 'Salad with Olives', price: 80 },
  ],
  mainCourse: [
    { id: '6', name: 'Burger', price: 70 },
    { id: '7', name: 'Dagwood', price: 90 },
    { id: '8', name: 'Pizza', price: 100 },
    { id: '9', name: 'Steak', price: 400 },
    { id: '10', name: 'Ribeye', price: 200 },
    { id: '11', name: 'Wings', price: 150 },
    { id: '12', name: 'Seafood', price: 400 },
  ],
  Dessert: [
    { id: '13', name: 'Ice Cream', price: 40 },
    { id: '14', name: 'Cake', price: 95 },
    { id: '15', name: 'Cookies', price: 30 },
    { id: '16', name: 'Sweets with Caramel', price: 100 },
  ],
};

const MenuScreen = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('Dessert'); // Default cuisine
  const [orderCount, setOrderCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0); // New state for total price

  // Function to handle adding item to the order
  const handleAddToOrder = (price) => {
    setOrderCount(orderCount + 1);
    setTotalPrice(totalPrice + price); // Update total price when item is added
  };

  // Function to handle confirming the order
  const handleConfirmOrder = () => {
    alert(`Order confirmed! Total items: ${orderCount}, Total price: R${totalPrice.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      {/* Cuisine Buttons */}
      <View style={styles.cuisineContainer}>
        {Object.keys(menuData).map((cuisine) => (
          <TouchableOpacity
            key={cuisine}
            style={styles.cuisineButton}
            onPress={() => setSelectedCuisine(cuisine)}
          >
            <Text style={styles.cuisineText}>{cuisine}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Display Food Items based on selected cuisine */}
      <Text style={styles.subtitle}>{selectedCuisine} Dishes</Text>
      <FlatList
        data={menuData[selectedCuisine]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>{item.name} - R{item.price}</Text>
            <Button title="Add to Order" onPress={() => handleAddToOrder(item.price)} />
          </View>
        )}
      />

      {/* Order Count and Total Price Display */}
      <Text style={styles.orderSummary}>Items in Order: {orderCount}</Text>
      <Text style={styles.orderSummary}>Total Price: R{totalPrice.toFixed(2)}</Text>

      {/* Confirm Order Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOrder}>
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cuisineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  cuisineButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  cuisineText: {
    color: '#fff',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  menuItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 18,
  },
  orderSummary: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 5,
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: '#808080',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
//OpenAI. (2024). MenuScreen Component in React Native. Available at: GitHub Repository or Your Project (Accessed: 2 October 2024).