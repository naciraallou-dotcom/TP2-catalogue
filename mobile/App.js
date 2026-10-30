
import { View, Text, StyleSheet } from 'react-native';

const produits = [
  { id: 1, nom: 'Clavier', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', prix: 240, stock: 3 }
];

const produitsDisponibles = produits.filter(p => p.stock > 0);

const valeurTotale = produits.reduce(
  (total, p) => total + p.prix * p.stock, 0
);

export default function App() {
  return (
    <View style={styles.ecran}>
      <Text style={styles.titre}>Catalogue des produits</Text>

      <Text style={styles.info}>
        Produits disponibles : {produitsDisponibles.length}
      </Text>

      <Text style={styles.info}>
        Valeur totale du stock : {valeurTotale} MAD
      </Text>

      <Text style={styles.sousTitre}>Liste des produits :</Text>

      {produits.map(p => (
        <Text key={p.id} style={styles.ligne}>
          {p.nom} - {p.prix} MAD - {p.stock} unités
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    justifyContent: 'center',
    padding: 26,
    backgroundColor: '#F2F7FD'
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00235C',
    marginBottom: 20
  },
  info: {
    fontSize: 18,
    marginBottom: 15,
    color: '#003796'
  },
  sousTitre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10
  },
  ligne: {
    fontSize: 16,
    marginBottom: 10
  }
});

