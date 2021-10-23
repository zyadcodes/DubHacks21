// First screen user will see before choosing preferences

import colors from "../config/colors";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export default function welcomeScreen(){
    return(
        <View>
            <Text>
                Welcome to Dubhacks!
                <TouchableOpacity>
                    <Text>
                        Choose Dietary Preference
                    </Text>
                </TouchableOpacity>
            </Text>
        </View>

    )
};