import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

export const NotificationScreen = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const getNotifications = async () => {
    try {
      const response = await fetch('https://sch-api-notification.herokuapp.com/notifications/queries/find-by-user', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkJCZjlwWnlFamQyTzlVQXVWNjJtTSJ9.eyJpc3MiOiJodHRwczovL2Rldi1sdWc5dWc0bi51cy5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDkwOTQ5OTQ4NTYwMzU1MjEyOTQiLCJhdWQiOlsiaHR0cDovL2RuYS1zY2hhbWJlY2suaGVyb2t1YXBwLmNvbSIsImh0dHBzOi8vZGV2LWx1Zzl1ZzRuLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NDcxNDU1MTcsImV4cCI6MTY0NzIzMTkxNywiYXpwIjoiZUtjNUk1MWptNERJMFJrNElxblVpb0pBdE9yQTU0MEgiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIHJlYWQ6c3RhdHMgY3JlYXRlOm11dGFudCBsaXN0Om11dGFudCIsInBlcm1pc3Npb25zIjpbImNyZWF0ZTptdXRhbnQiLCJsaXN0Om11dGFudCIsInJlYWQ6c3RhdHMiXX0.SDSuEponOsCX2v2KkY7useaWTvaq2YeYPDFv4u89A5gPvjH3mfLRrZYmnOPW9k0IWAbJhVXhikIwI1nNPDqnX9JB3rQCnMREpQUJy2jBJQk-FYDc4C_p7Fi97E4lmssu1wz21k33bDuIx9OG35HF9T8O1HdRSomksTxdwd5go6VMD-0VHb7XV-wPoNmw2WqLi_kBjQ1B996b14TCw7BzywkZFw4z7xBbqSZXdVYCEApVx8c8nm62bSeQnXAUs0VGM9cy0-6bT8UJwpzKtlqEntQmDCMD2rA9QmmZaaGbGHtW10vj4aYUMQ7ABYnK5jdwyBfHKnb-b0Ih9jrgiFf9vw'
        }
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getNotifications();
  }, []);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator size="large" color="#00ff00" /> : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      )}
    </SafeAreaView>
  );
};

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.id}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  }
});
