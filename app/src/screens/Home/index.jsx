import React, { useState, useEffect } from "react";
import {Text, FlatList, TouchableOpacity, ToastAndroid } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


import {
  Container,
  Header,
  HeaderTitle,
  Avatar,
  Main,
  Card,
  SearchInput,
  Footer,
  ButtonAddCard,
  ButtonAddCardText,
} from "./styles";

export function Home() {
  const [searchText, setSearchText] = useState("");
  const [notes, setNotes] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [sort, setSort] = useState("Desc");

  const showToast = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  useEffect(() => {
    if (searchText === "") {
      setNotes(notes);
    } else {
      setNotes(
        newList.filter((item) => {
          if (
               item.slip.advice
              .toLocaleLowerCase()
              .indexOf(searchText.toLocaleLowerCase()) > -1
          ) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [searchText]);


  const getNotes = async () => {
    // Adicione o parâmetro 'callback' à URL para usar JSONP
    const timestamp = Date.now();
    const URL = `https://api.adviceslip.com/advice?timestamp=${timestamp}`;

    try {
      setIsFetching(true);

      // Use fetch como de costume
      const response = await fetch(URL);
      const data = await response.json();

      setNotes((prevNotes) => [...prevNotes, data]);
    } catch (error) {
      console.error('Erro ao obter notas:', error);
    } finally {
      // Definir um temporizador para resetar o status de busca após 2 segundos
      setTimeout(() => {
        setIsFetching(false);
      }, 2000);
    }
  };

  const handleAddNote = () => {
    if (!isFetching) {
      setIsFetching(true);
      getNotes();
    } else {
      showToast("Aguarde 2 segundos antes de fazer outra solicitação.");
    }
  };
  
  
  const handleOrderClick = () => {
    let newList = [...notes];

    if (sort === "Desc") {
      newList.sort((a, b) =>
        a.slip.advice > b.slip.advice ? 1 : b.slip.advice > a.slip.advice ? -1 : 0
      );
      setSort("Asc");
    } else {
      newList.sort((a, b) =>
        a.slip.advice < b.slip.advice ? 1 : b.slip.advice < a.slip.advice ? -1 : 0
      );
      setSort("Desc");
    }
    setNotes(newList);

    console.log("Result Notes=>>>>>", notes)
  };

  return (
    <>
      <Header>
        <Avatar source={{ uri: "https://github.com/alexandre-moreira.png" }} />
        <HeaderTitle>NOTE APP</HeaderTitle>
        <TouchableOpacity onPress={handleOrderClick}>
          {sort === "Desc" ? (
            <FontAwesome name="sort-alpha-asc" size={24} color="#f8f9fa" />
          ) : (
            <FontAwesome name="sort-alpha-desc" size={24} color="#f8f9fa" />
          )}
        </TouchableOpacity>
      </Header>
      <Container>
        <SearchInput
          placeholder={"Search..."}
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        <Main>
          <FlatList
            data={notes}
            keyExtractor={(item) => item.slip.id}
            numColumns={2}
            renderItem={({ item }) => (
              <Card>
                <Text>{item.slip.advice}</Text>
              </Card>
            )}
          />
        </Main>
       
      </Container>
      <Footer>
          <ButtonAddCard onPress={handleAddNote}>
            <ButtonAddCardText>+</ButtonAddCardText>
          </ButtonAddCard>
        </Footer>
    </>
  );
}
