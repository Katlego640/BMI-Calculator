import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function LearnScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Healthy Lifestyle Guide</Text>

      {/* Tip 1 */}
      <View style={styles.tipRow}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=300' }}
          style={styles.thumbnail}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>1. Balanced Diet</Text>
          <Text style={styles.cardText}>
            Eat whole foods, vegetables, and lean proteins daily.
          </Text>
        </View>
      </View>

      {/* Tip 2 */}
      <View style={styles.tipRow}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300' }}
          style={styles.thumbnail}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>2. Stay Active</Text>
          <Text style={styles.cardText}>
            Aim for at least 30 minutes of moderate exercise daily.
          </Text>
        </View>
      </View>

      {/* Tip 3 */}
      <View style={styles.tipRow}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300' }}
          style={styles.thumbnail}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>3. Hydration & Rest</Text>
          <Text style={styles.cardText}>
            Drink 2L of water daily and aim for 7–8 hours of quality sleep.
          </Text>
        </View>
      </View>

      {/* Tip 4 */}
      <View style={styles.tipRow}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300' }}
          style={styles.thumbnail}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>4. Stress Management</Text>
          <Text style={styles.cardText}>
            Practice mindfulness, breathing exercises, and take regular breaks.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: '#f9f9f9', justifyContent: 'center' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 12, textAlign: 'center', color: '#1a1a1a' },
  tipRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  thumbnail: { width: 70, height: 70, borderRadius: 8, marginRight: 12 },
  textContainer: { flex: 1 },
  cardTitle: { fontSize: 15, fontWeight: 'bold', color: '#007AFF', marginBottom: 2 },
  cardText: { fontSize: 12, color: '#444', lineHeight: 16 },
});