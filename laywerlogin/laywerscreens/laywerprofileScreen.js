import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default function lawyerProfileScreen() {
  const [profilePicture, setProfilePicture] = useState(
    require('../assets/user1.png') // Default profile picture
  );
  const userData = {
    username: 'JohnDoe',
    dob: 'January 1, 1990',
    mobileNumber: '+1234567890',
  };

  const handleAddProfilePhoto = () => {
    console.log('Button pressed'); // Check if the button press is detected
  
    const options = {
      title: 'Select Profile Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
  
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Image selected:', response.uri);
        // Update the profile picture state with the selected image
        setProfilePicture({ uri: response.uri });
      }
    });
  };
  


  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profilePictureContainer}>
          <Image source={profilePicture} style={styles.profilePicture} />
        </View>

        <View style={styles.userDataContainer}>
          <Text style={styles.username}>{userData.username}</Text>
          <Text>Date of Birth: {userData.dob}</Text>
          <Text>Mobile Number: {userData.mobileNumber}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addPhotoButton} onPress={handleAddProfilePhoto}>
        <Text>Add Profile picture</Text>
      </TouchableOpacity>

      <View style={styles.maintenanceText}>
        <Text>Profile Screen is under maintenance...</Text>
        <Text>Please visit some other time..!!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePictureContainer: {
    padding: 20,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userDataContainer: {
    marginLeft: 20,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addPhotoButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  maintenanceText: {
    alignItems: 'center',
    marginTop: 20,
  },
});