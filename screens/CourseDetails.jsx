import React, {useState} from 'react';
import { View, Text, Modal, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CourseDetails = ({ visible, onClose, courseData }) => {
  const [enrolled, setEnrolled] = useState(false);
  const [syllabusExpanded, setSyllabusExpanded] = useState(false);

  if (!courseData) {
    return null;
  }

  const syllabus = [
    'Module 1: Introduction to React Native',
    'Module 2: Building User Interfaces',
    'Module 3: State Management',
  ];

  const handleEnroll = () => {
    setEnrolled(true);
  };

  const toggleSyllabus = () => {
    setSyllabusExpanded(!syllabusExpanded);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="arrow-back" size={24} color="black" style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.courseName}>{courseData.name}</Text>
        </View>
        <Text style={styles.subtitle}>Instructor: {courseData?.instructor}</Text>
        <Text style={styles.subtitle}>{courseData?.description}</Text>
        <Text style={styles.subtitle}>Enrollment Status: {courseData?.status}</Text>
        <Text style={styles.subtitle}>Course Duration: {courseData?.duration}</Text>
        <Text style={styles.subtitle}>Schedule: {courseData?.schedule}</Text>
        <Text style={styles.subtitle}>Location: {courseData?.location}</Text>
        <Text style={styles.subtitle}>Pre-requisites: {courseData?.prerequisites}</Text>
        
        <TouchableOpacity style={styles.syllabusButton} onPress={toggleSyllabus}>
          <Text style={styles.syllabusButtonText}>Syllabus</Text>
        </TouchableOpacity>

        {syllabusExpanded && (
          <ScrollView style={styles.syllabus}>
            {syllabus.map((item, index) => (
              <TouchableOpacity key={index} style={styles.syllabusItem}>
                <Text style={styles.syllabusItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}

        {courseData.status === 'Open' && !enrolled && (
          <TouchableOpacity style={styles.enrollButton} onPress={handleEnroll}>
            <Text style={styles.enrollButtonText}>Enroll in Course</Text>
          </TouchableOpacity>
        )}

        {enrolled && (
          <Text style={styles.enrollmentConfirmation}>You have successfully enrolled in this course.</Text>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  backButton: {
    top: 4,
  },  
  courseName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 80,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  syllabus: {
    maxHeight: 150,
  },
  syllabusItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  syllabusItemText: {
    fontSize: 16,
  },
  syllabusButton: {
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    width: 100,
  },
  syllabusButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  enrollButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  enrollButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  enrollmentConfirmation: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
  },
});

export default CourseDetails;
