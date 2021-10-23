// First screen user will see before choosing preferences

import colors from "../config/colors";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import style from "./welcomeScreenStyle"

export default function welcomeScreen(){
    return(
        <View style={style.Body}>
            <Text>
                Welcome to Dubhacks!
                <TouchableOpacity style = {style.Button}>
                    <Text>
                        Choose Dietary Preference
                    </Text>
                </TouchableOpacity>
            </Text>
        </View>

    )
};