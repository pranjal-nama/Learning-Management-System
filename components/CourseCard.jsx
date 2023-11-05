import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CourseCard = ({ course, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.courseName}>{course.name}</Text>
      <Text style={styles.courseInstructor}>Instructor: {course.instructor}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseInstructor: {
    fontSize: 14,
    color: '#555',
  },
});

export default CourseCard;
