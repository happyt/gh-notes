import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
var Profile = require('./Profile');
var api = require('../Utils/api');
var Repositories = require('./Repositories');
var Notes = require('./Notes');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 65
    },
    image: {
        height: 360
    },
    buttonText: {
        fontSize: 24,
        color: '#111',
        alignSelf: 'center'
    },

});

class Dashboard extends React.Component{
    makeBackground(btn) {
        var obj = {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        }
        if (btn === 0) {
            obj.backgroundColor = '#4BBBEC';
        } else if (btn === 1) {
            obj.backgroundColor = '#E77AAE';
        } else {
            obj.backgroundColor = '#758BF4';
        }
        return obj;
    }

    gotoProfile() {
       this.props.navigator.push({
                        title: 'Profile page',
                        component: Profile,
                        passProps: {userInfo: this.props.userInfo}
                    });

//        console.log('Profile');
    }

    gotoRepos() {
        api.getRepos(this.props.userInfo.login)
        .then((jsonRes) => {
            this.props.navigator.push({
            component: Repositories,
            title: "Repositories Page",
            passProps: {
                repos: jsonRes,
                userInfo: this.props.userInfo
            }
            });
        })
    }

    gotoNotes() {
        api.getNotes(this.props.userInfo.login)
        .then((jsonRes) => {
            jsonRes = jsonRes || {};
            this.props.navigator.push({
            component: Notes,
            title: 'Notes',
            passProps: {
                notes: jsonRes,
                userInfo: this.props.userInfo
            }
            });
        });
        }

    render() {
        return(
            <View style={styles.container} >
                <Image source= {{url: this.props.userInfo.avatar_url}} 
                    style={styles.image} />
                <TouchableHighlight
                    style={this.makeBackground(0)}
                    onPress={this.gotoProfile.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={styles.buttonText}> View Profile </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(1)}
                    onPress={this.gotoRepos.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={styles.buttonText}> View Repos </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(2)}
                    onPress={this.gotoNotes.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={styles.buttonText}> View Notes </Text>
                </TouchableHighlight>

            </View>
        ) 
    }
}

module.exports = Dashboard;