import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import StudentDashboard from './StudentDashboard';
import { SafeAreaView } from 'react-native';
import CourseDetails from './CourseDetails';
import CourseCard from '../components/CourseCard';

const CourseListing = ({courses}) => {
    const [isUserProfileModalVisible, setUserProfileModalVisible] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isCourseDetailModalVisible, setCourseDetailModalVisible] = useState(false);

    const navigateToCourseDetails = (course) => {
      setSelectedCourse(course);
      setCourseDetailModalVisible(true);
    };

    const userData = {
        name: 'John Doe',
    };
    const fakeCourses = [
      {
        id: 1,
        name: 'Course 1',
        instructor: 'Instructor 1',
        description: 'This is the description for Course 1.',
        status: 'Open'
      },
      {
        id: 2,
        name: 'Course 2',
        instructor: 'Instructor 2',
        description: 'This is the description for Course 2.',
      },
      {
        id: 3,
        name: 'Course 2',
        instructor: 'Instructor 2',
        description: 'This is the description for Course 2.',
      },
      {
        id: 4,
        name: 'Course 2',
        instructor: 'Instructor 2',
        description: 'This is the description for Course 2.',
      },
      {
        id: 5,
        name: 'Course 2',
        instructor: 'Instructor 2',
        description: 'This is the description for Course 2.',
      },
      {
        id: 6,
        name: 'Course 2',
        instructor: 'Instructor 2',
        description: 'This is the description for Course 2.',
      },
      {
        id: 7,
        name: 'Course 2',
        instructor: 'Instructor 2',
        description: 'This is the description for Course 2.',
      },
      {
        id: 8,
        name: 'Course 2',
        instructor: 'Instructor 2',
        description: 'This is the description for Course 2.',
      },
      {
        id: 9,
        name : 'Course 2',
        instructor: 'Instructor 2',
        description: 'This is the description for Course 2.',
      },
      {
        id: 10,
        name: 'Course 2',
        instructor: 'Instructor 2',
        description: 'This is the description for Course 2.',
      },
      {
        id: 11,
        name: 'Course 2',
        instructor: 'Instructor 2',
        description: 'This is the description for Course 2.',
      },
      {
        id: 12,
        name: 'Course 2',
        instructor: 'Instructor 2',
        description: 'This is the description for Course 2.',
      },
      {
        id: 13,
        name: 'Course 2',
        instructor: 'Instructor 2',
        description: 'This is the description for Course 2.',
      },
      {
        id: 14,
        name: 'Course 2',
        instructor: 'Instructor 2',
        description: 'This is the description for Course 2.',
      },
      {
        id: 15,
        name: 'Course 2',
        instructor: 'Instructor 2',
        description: 'This is the description for Course 2.',
      },
      {
        id: 16,
        name: 'Course 2',
        instructor: 'Instructor 2',
        description: 'This is the description for Course 2.',
      },
    ];
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Course Listing</Text>
        <TouchableOpacity style={styles.avatarContainer} onPress={() => setUserProfileModalVisible(true)}>
          <Image
            source={require('../assets/account.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
       <ScrollView style={styles.courseList}>
        {fakeCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onPress={() => navigateToCourseDetails(course)}
          />
        ))}
      </ScrollView>

      <StudentDashboard
        visible={isUserProfileModalVisible}
        onClose={() => setUserProfileModalVisible(false)}
        userData={userData}
        enrolledCourses={fakeCourses}
      />

      <CourseDetails
        visible={isCourseDetailModalVisible}
        onClose={() => setCourseDetailModalVisible(false)}
        courseData={selectedCourse}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#3498db',
  },
  headerTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  courseList: {
    marginTop: 18,
  }
});

export default CourseListing;
