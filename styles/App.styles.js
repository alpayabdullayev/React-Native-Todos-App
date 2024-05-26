import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    gap: 5,
  },
  text: {
    color: "#fff",
  },
  textInput: {
    backgroundColor: "#fff",
    width: 200,
    height: 50,
    color: "#000",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    fontSize: 20,
    textAlign: "center",
  },
  buttonText: {
    color: "#000",
  },
  addButton: {
    backgroundColor: "#f90",
    color: "#000",
    padding: 10,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: "#f90",
    color: "#000",
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "#1f1f1f",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
  },
  scrollView: {
    width: "100%",
  },
  todoItem: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
});

export default styles;
