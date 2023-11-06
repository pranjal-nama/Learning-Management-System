import React, {useState, useEffect} from 'react';
import { View, Text, Modal, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CourseDetails = ({ visible, onClose, courseData, onEnroll, enrolled}) => {
  const [syllabusExpanded, setSyllabusExpanded] = useState(false);

  const handleEnroll = () => {
    onEnroll()
  };

  if (!courseData) {
    return null;
  }

  const toggleSyllabus = () => {
    setSyllabusExpanded(!syllabusExpanded);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="arrow-back" size={24} color="black" style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.courseName}>{courseData.name}</Text>
        </View>
        <Text style={styles.label}>Instructor:</Text>
        <Text style={styles.subtitle}>{courseData?.instructor}</Text>

        <Text style={styles.label}>Description:</Text>
        <Text style={styles.subtitle}>{courseData?.description}</Text>

        <Text style={styles.label}>Enrollment Status:</Text>
        <Text style={styles.subtitle}>{courseData?.enrollmentStatus}</Text>

        <Text style={styles.label}>Course Duration:</Text>
        <Text style={styles.subtitle}>{courseData?.duration}</Text>

        <Text style={styles.label}>Schedule:</Text>
        <Text style={styles.subtitle}>{courseData?.schedule}</Text>

        <Text style={styles.label}>Location:</Text>
        <Text style={styles.subtitle}>{courseData?.location}</Text>

        <Text style={styles.label}>Pre-requisites:</Text>
        <Text style={styles.subtitle}>{courseData?.prerequisites.join(', ')}</Text>
        
        <TouchableOpacity style={styles.syllabusButton} onPress={toggleSyllabus}>
          <Text style={styles.syllabusButtonText}>Syllabus</Text>
        </TouchableOpacity>

        {syllabusExpanded && (
          <ScrollView style={styles.syllabus}>
            {courseData.syllabus.map((item, index) => (
              <TouchableOpacity key={index} style={styles.syllabusItem}>
                <Text style={styles.syllabusItemText}>
                  {`Week ${item.week}: ${item.topic}`}
                </Text>
                <Text>{item.content}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}

        {courseData.enrollmentStatus === 'Open' && !enrolled && (
          <TouchableOpacity style={styles.enrollButton} onPress={() => handleEnroll(courseData?.id)}>
            <Text style={styles.enrollButtonText}>Enroll in Course</Text>
          </TouchableOpacity>
        )}

        {enrolled && (
          <Text style={styles.enrollmentConfirmation}>You have successfully enrolled in this course.</Text>
        )}
      </ScrollView>
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
    marginLeft: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'gray',
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
