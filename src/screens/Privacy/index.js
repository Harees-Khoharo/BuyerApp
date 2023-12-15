import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { styles } from "./style";
import Header from "../../components/Header";

export default function Privacy() {
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <ScrollView>
          <Header title={"Privacy  "} />
          <View style={styles.padding}>
            <Text style={styles.graphText2}>Cancellation Policy</Text>
            <Text style={styles.graphText3}>
            Lorem ipsum dolor sit amet consectetur. Sollicitudin ac justo eget dui platea facilisis lorem sed tellus. Neque morbi vitae lacus senectus lorem molestie mollis nisl. A lectus a tellus egestas enim urna viverra. Sodales fermentum curabitur nulla porttitor. Ut elit vestibulum ultricies risus Lorem ipsum dolor sit amet consectetur. Sollicitudin ac justo eget dui platea facilisis lorem             </Text>
          </View>
          <View style={styles.padding}>
            <Text style={styles.graphText2}>Terms & Condition</Text>
            <Text style={styles.graphText3}>
            Lorem ipsum dolor sit amet consectetur. Sollicitudin ac justo eget dui platea facilisis lorem sed tellus. Neque morbi vitae lacus senectus lorem molestie mollis nisl. A lectus a tellus egestas enim urna viverra. Sodales fermentum curabitur nulla porttitor. Ut elit vestibulum ultricies risus Lorem ipsum dolor sit amet consectetur. Sollicitudin ac justo eget dui platea facilisis lorem Lorem ipsum dolor sit amet consectetur. Sollicitudin ac justo eget dui platea facilisis lorem Lorem ipsum dolor sit amet consectetur. Sollicitudin ac justo eget dui platea facilisis lorem Lorem ipsum dolor sit amet consectetur. Sollicitudin ac justo eget dui platea facilisis lorem sed tellus. Neque morbi vitae lacus senectus lorem molestie mollis nisl. A lectus a tellus egestas enim urna viverra. Sodales fermentum curabitur nulla porttitor. Ut elit vestibulum ultricies risus                                           </Text>
          </View>
          {/* <View style={styles.padding}>
            <Text style={styles.graphText2}>
              3. Disclosure of your personal data
            </Text>
            <Text style={styles.graphText3}>
              ;WBCUDBCS;DBCJXNCXNNKMCKXMCKNXCKNCXNCNOBCUBDUIBCDUUDJKODNDHCUSksujkssssssssssssssssssssssssssssssssssssssssljnduncubducbububcusbcubcjsjduendisndufnfimsiksncinskcjskcnidcjscjhkdyudhhffbfjdmdkdifhfdndjdufyfnfkkfdifhfnfjfkfgifjrkfodfuhrnnfvufbdmskdofufnfkddodjlfurhjfdkdhdfjdfldodkeodmdurytrieos,dncbfvcmd,dlslspsoiduhrfhndkdodiyrjrirurirriryrjrururirirjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhgggggggggggggggggggggg.
            </Text>
          </View> */}
          <View style={styles.margin}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
