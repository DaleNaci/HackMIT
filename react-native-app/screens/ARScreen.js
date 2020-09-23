import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ViroARScene, Viro3DObject } from 'react-viro';


export default class ARScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ViroARScene>
                    <Viro3DObject source={{uri:"http://8c13f1872e6e.ngrok.io/get_file/test.obj"}}
                        position={[-0.0, -5.5, -1.15]}
                        materials={["heart"]}
                        type="OBJ" />
                </ViroARScene>
            </View>
        );
    }
}