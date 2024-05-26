import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  createTodos,
  deleteTodos,
  getAllTodos,
} from "../services/todos-service.js";
import styles from '../styles/App.styles.js';
import { NavigationContainer } from '@react-navigation/native';

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState("");

  // const api = "https://66533019813d78e6d6d77f20.mockapi.io/todos";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios(api);
  //       console.log(res);
  //       setData(res);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todos = await getAllTodos();
        setData(todos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // const deleteData = async (id) => {
  //   try {
  //     await axios.delete(`${api}/${id}`);
  //     setData((prevData) => prevData.filter((item) => item.id !== id));
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const deleteData = async (id) => {
    try {
      await deleteTodos(id);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  // const createData = async () => {
  //   try {
  //     await axios.post(api, { data });
  //     setData({ todo: "" });
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const createData = async () => {
    try {
      const newTodo = { todo };
      const createdTodo = await createTodos(newTodo);
      setData((prevData) => [...prevData, createdTodo]);
      setTodo("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>TodoHub app</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.textInput}
            value={todo}
            onChangeText={setTodo}
            placeholder="Add..."
          />
          <TouchableOpacity style={styles.addButton} onPress={createData}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          {data &&
            data.map((item) => (
              <View key={item.id} style={styles.row}>
               <TouchableOpacity onPress={() => navigation.navigate('Details', { todo: item })}>
                <Text style={styles.text}>{item.todo}</Text>
              </TouchableOpacity> 
                <View style={styles.row}>
                  <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.buttonText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => deleteData(item.id)}
                  >
                    <Text style={styles.deleteButtonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </>
  );
}
