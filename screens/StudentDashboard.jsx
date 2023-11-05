import React from 'react';
import { View, Text, Modal, TouchableOpacity, Image, StyleSheet, ProgressBarAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ProgressBar from 'react-native-progress/Bar';
import { Ionicons } from '@expo/vector-icons';

const StudentDashboard = ({ visible, onClose, userData, enrolledCourses }) => {
  if (!enrolledCourses) {
    return null;
  }

  return (
    <Modal visible={visible} animationType="slide">
      <ScrollView>
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="arrow-back" size={24} color="black" style={styles.backButton}/>
          </TouchableOpacity>
          <Text style={styles.userName}>{userData.name}'s Dashboard</Text>
        </View>

        {enrolledCourses.map((course, index) => (
          <View key={index} style={styles.courseCard}>
            <Image source={{ uri: course.image }} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseName}>{course.name}</Text>
              <Text style={styles.instructor}>Instructor: {course.instructor}</Text>
              <Text style={styles.dueDate}>Due Date: {course.dueDate}</Text>
              {/* <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={course.progress}
                style={styles.progressBar}
              /> */}
              <ProgressBar progress={0.5} width={200} color="#555" height={7} />
            </View>
          </View>
        ))}
      </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  courseCard: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 8,
  },
  courseImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  courseInfo: {
    flex: 1,
    padding: 16,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  instructor: {
    fontSize: 16,
    marginBottom: 8,
  },
  dueDate: {
    fontSize: 16,
    marginBottom: 8,
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
  },
  backButton: {
    right: 33,
    top: -6,
  },
});

export default StudentDashboard;
