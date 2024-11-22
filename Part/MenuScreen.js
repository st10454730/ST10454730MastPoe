import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const menuData = {
  Starter: [
    { id: '1', name: 'Chicken Salad', description: 'Fresh salad with grilled chicken slices', price: 50 },
    { id: '2', name: 'Crab Legs with Cheese', description: 'Grilled crab legs topped with melted cheese', price: 150 },
    { id: '3', name: 'Fried Tofu', description: 'Crispy tofu served with a savory dipping sauce', price: 70 },
    { id: '4', name: 'Samosas', description: 'Spicy stuffed pastries, perfect for a starter', price: 50 },
    { id: '5', name: 'Salad with Olives', description: 'Fresh greens with olives and a light dressing', price: 80 },
  ],
  mainCourse: [
    { id: '6', name: 'Burger', description: 'Juicy beef burger with house special sauce', price: 70 },
    { id: '7', name: 'Dagwood', description: 'Layered sandwich with meats, cheese, and veggies', price: 90 },
    { id: '8', name: 'Pizza', description: 'Classic pizza with mozzarella and basil', price: 100 },
    { id: '9', name: 'Steak', description: 'Tender grilled steak with garlic butter', price: 400 },
    { id: '10', name: 'Ribeye', description: 'Ribeye steak cooked to perfection', price: 200 },
    { id: '11', name: 'Wings', description: 'Spicy and crispy chicken wings', price: 150 },
    { id: '12', name: 'Seafood', description: 'Assorted seafood with a lemon garlic sauce', price: 400 },
  ],
  Dessert: [
    { id: '13', name: 'Ice Cream', description: 'Rich and creamy vanilla ice cream', price: 40 },
    { id: '14', name: 'Cake', description: 'Moist chocolate cake with layers of frosting', price: 95 },
    { id: '15', name: 'Cookies', description: 'Homemade cookies with chocolate chips', price: 30 },
    { id: '16', name: 'Sweets with Caramel', description: 'Assorted sweets drizzled with caramel', price: 100 },
  ],
};

const MenuScreen = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('Dessert');
  const [orderCount, setOrderCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToOrder = (price) => {
    setOrderCount(orderCount + 1);
    setTotalPrice(totalPrice + price);
  };

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
            <Text style={styles.menuItemDescription}>{item.description}</Text>
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
    backgroundColor: '#EAF4F4', // Light grayish-blue background
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Dark text for visibility
  },
  cuisineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  cuisineButton: {
    padding: 12,
    backgroundColor: '#2A9D8F', // Teal for cuisine buttons
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  cuisineText: {
    color: '#fff', // White text for contrast
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
    color: '#555', // Neutral subtitle color
  },
  menuItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#DFF6F0', // Light mint green background
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#B2DFDB',
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  orderSummary: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    color: '#444', // Darker gray for order text
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50', // Vibrant green for confirmation button
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default MenuScreen;
