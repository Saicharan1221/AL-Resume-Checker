import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Colors from '@/constants/Colors';

export default function ResumePreview() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.resumeContent}>
        <Text style={styles.resumeHeader}>John Doe</Text>
        <Text style={styles.resumeSubheader}>Senior Software Engineer</Text>
        <View style={styles.contactInfo}>
          <Text style={styles.contactText}>johndoe@example.com</Text>
          <Text style={styles.contactText}>555-123-4567</Text>
          <Text style={styles.contactText}>San Francisco, CA</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Professional Experience</Text>
          <View style={styles.divider} />
          
          <View style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.companyName}>Tech Solutions Inc.</Text>
              <Text style={styles.dateRange}>2018 - Present</Text>
            </View>
            <Text style={styles.jobTitle}>Senior Software Engineer</Text>
            <View style={styles.bulletPoints}>
              <Text style={styles.bulletPoint}>• Led the development of a microservices architecture that <Text style={styles.highlightSuccess}>improved system scalability by 200%</Text></Text>
              <Text style={styles.bulletPoint}>• <Text style={styles.highlightError}>Developed frontend applications using React</Text> and backend services with Node.js</Text>
              <Text style={styles.bulletPoint}>• Implemented automated testing pipelines that <Text style={styles.highlightSuccess}>reduced bug reports by 45%</Text></Text>
              <Text style={styles.bulletPoint}>• <Text style={styles.highlightWarning}>Collaborated with product managers to define and prioritize features</Text></Text>
            </View>
          </View>
          
          <View style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.companyName}>Innovation Labs</Text>
              <Text style={styles.dateRange}>2015 - 2018</Text>
            </View>
            <Text style={styles.jobTitle}>Software Developer</Text>
            <View style={styles.bulletPoints}>
              <Text style={styles.bulletPoint}>• Built RESTful APIs serving <Text style={styles.highlightSuccess}>over 10,000 daily active users</Text></Text>
              <Text style={styles.bulletPoint}>• <Text style={styles.highlightError}>Maintained legacy systems</Text> while implementing new features</Text>
              <Text style={styles.bulletPoint}>• Optimized database queries resulting in <Text style={styles.highlightSuccess}>30% performance improvements</Text></Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Skills</Text>
          <View style={styles.divider} />
          
          <Text style={styles.paragraphText}>
            <Text style={styles.highlightError}>JavaScript, TypeScript, React, Node.js, Express, MongoDB, PostgreSQL, REST API, Git, Agile methodologies</Text>
          </Text>
          
          <View style={styles.suggestion}>
            <Text style={styles.suggestionText}>
              Suggestion: Format skills as bullet points and add missing keywords: CI/CD, Kubernetes, Docker, AWS
            </Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Education</Text>
          <View style={styles.divider} />
          
          <View style={styles.educationItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.companyName}>University of California, Berkeley</Text>
              <Text style={styles.dateRange}>2011 - 2015</Text>
            </View>
            <Text style={styles.jobTitle}>Bachelor of Science in Computer Science</Text>
            <Text style={styles.bulletPoint}>• GPA: 3.8/4.0</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: Colors.gray[200],
    borderRadius: 8,
    maxHeight: 500,
    marginTop: 16,
  },
  resumeContent: {
    padding: 24,
  },
  resumeHeader: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: Colors.gray[900],
    marginBottom: 4,
  },
  resumeSubheader: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.gray[700],
    marginBottom: 12,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  contactText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.gray[900],
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.gray[300],
    marginBottom: 16,
  },
  experienceItem: {
    marginBottom: 20,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  companyName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.gray[900],
  },
  dateRange: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
  },
  jobTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 15,
    color: Colors.gray[800],
    marginBottom: 8,
  },
  bulletPoints: {
    marginLeft: 4,
  },
  bulletPoint: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[700],
    marginBottom: 6,
    lineHeight: 20,
  },
  paragraphText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[700],
    lineHeight: 20,
  },
  highlightError: {
    backgroundColor: 'rgba(255, 74, 74, 0.2)',
    borderRadius: 2,
  },
  highlightWarning: {
    backgroundColor: 'rgba(255, 184, 0, 0.2)',
    borderRadius: 2,
  },
  highlightSuccess: {
    backgroundColor: 'rgba(0, 196, 140, 0.2)',
    borderRadius: 2,
  },
  educationItem: {
    marginBottom: 16,
  },
  suggestion: {
    backgroundColor: Colors.primary_light,
    padding: 12,
    borderRadius: 6,
    marginTop: 12,
  },
  suggestionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.primary,
    lineHeight: 20,
  },
});