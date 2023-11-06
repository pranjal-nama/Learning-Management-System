import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import StudentDashboard from './StudentDashboard';
import { SafeAreaView } from 'react-native';
import CourseDetails from './CourseDetails';
import CourseCard from '../components/CourseCard';

const CourseListing = ({courses}) => {
    const [isUserProfileModalVisible, setUserProfileModalVisible] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isCourseDetailModalVisible, setCourseDetailModalVisible] = useState(false);
    const [coursesData, setCoursesData] = useState(null);
    const [enrolled, setEnrolled] = useState(false);

    const navigateToCourseDetails = (course) => {
      setSelectedCourse(course);
      setCourseDetailModalVisible(true);
    };

    const userData = {
        id: '101',
        name: 'Alice',
        email: "alice@example.com",
    };

    useEffect(() => {
      fetch('https://mock.mengxuegu.com/mock/65488797a6dde808a695ee60/example/courses')
        .then((response) => {
          if (response.ok) {
            return response.json(); 
          } else {
            throw new Error('Failed to fetch data from the API');
          }
        })
        .then((apiData) => {
          setCoursesData(apiData);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    const onEnroll = () => {
      const isEnrolled = selectedCourse.students.some(student => student.id === 101);
  
      if (!isEnrolled) {
        const newUser = {
          id: userData.id,
          name: userData.name,
          email: userData.email,
        };
  
        selectedCourse.students.push(newUser);
  
        setEnrolled(true);
      }
    };

    useEffect(()=>{
      setEnrolled(false)
    },[selectedCourse])
  
    
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
      {coursesData ? (
        <ScrollView style={styles.courseList}>
          {coursesData.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onPress={() => navigateToCourseDetails(course)}
            />
          ))}
        </ScrollView>
      ) : (
        <Text>Loading courses...</Text>
      )}

      <StudentDashboard
        visible={isUserProfileModalVisible}
        onClose={() => setUserProfileModalVisible(false)}
        userData={userData}
        courses={coursesData}
      />

      <CourseDetails
        visible={isCourseDetailModalVisible}
        onClose={() => setCourseDetailModalVisible(false)}
        courseData={selectedCourse}
        onEnroll={onEnroll}
        enrolled={enrolled}
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
