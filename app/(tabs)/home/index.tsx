import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight, Award, BadgeCheck, Zap } from 'lucide-react-native';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';
import { Card } from '@/components/ui/Card';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          colors={[Colors.primary, Colors.primary_dark]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.headerGradient}
        >
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>AI Resume Checker</Text>
            <Text style={styles.headerSubtitle}>
              Optimize your resume with AI-powered insights
            </Text>
            <Link href="/upload" asChild>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Check Your Resume</Text>
                <ArrowRight size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </Link>
          </View>
          <View style={styles.headerImageContainer}>
            {!isSmallScreen && (
              <Image
                source={{ uri: 'https://images.pexels.com/photos/1569076/pexels-photo-1569076.jpeg?auto=compress&cs=tinysrgb&w=800' }}
                style={styles.headerImage}
                resizeMode="cover"
              />
            )}
          </View>
        </LinearGradient>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>95%</Text>
            <Text style={styles.statText}>Higher Interview Rate</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>68%</Text>
            <Text style={styles.statText}>ATS Pass Rate Improvement</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>2.4x</Text>
            <Text style={styles.statText}>More Responses</Text>
          </View>
        </View>
      </View>

      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Key Features</Text>
        <View style={styles.featuresGrid}>
          <Card style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Zap size={24} color={Colors.warning} style={styles.featureIcon} />
            </View>
            <Text style={styles.featureTitle}>AI Analysis</Text>
            <Text style={styles.featureDescription}>
              Advanced AI algorithms analyze your resume for optimal structure and content
            </Text>
          </Card>
          
          <Card style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <BadgeCheck size={24} color={Colors.success} style={styles.featureIcon} />
            </View>
            <Text style={styles.featureTitle}>ATS Compatibility</Text>
            <Text style={styles.featureDescription}>
              Ensure your resume passes Applicant Tracking Systems
            </Text>
          </Card>
          
          <Card style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Award size={24} color={Colors.secondary} style={styles.featureIcon} />
            </View>
            <Text style={styles.featureTitle}>Job Matching</Text>
            <Text style={styles.featureDescription}>
              Compare your resume against job descriptions for perfect alignment
            </Text>
          </Card>
        </View>
      </View>

      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to improve your resume?</Text>
        <Link href="/upload" asChild>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Get Started</Text>
            <ArrowRight size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    marginBottom: 24,
  },
  headerGradient: {
    flexDirection: 'row',
    padding: 24,
    borderRadius: 0,
  },
  headerContent: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 48,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 12,
  },
  headerSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 24,
    maxWidth: 400,
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
    gap: 8,
  },
  headerButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  headerImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: 300,
    borderRadius: 16,
  },
  statsContainer: {
    marginHorizontal: 16,
    marginBottom: 32,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  statCard: {
    flex: 1,
    minWidth: 150,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statNumber: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: Colors.primary,
    marginBottom: 4,
  },
  statText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[700],
    textAlign: 'center',
  },
  featuresSection: {
    marginHorizontal: 16,
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: Colors.gray[900],
    marginBottom: 16,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  featureCard: {
    flex: 1,
    minWidth: 250,
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 12,
    alignItems: 'flex-start',
  },
  featureIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureIcon: {
    
  },
  featureTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.gray[900],
    marginBottom: 8,
  },
  featureDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    lineHeight: 22,
  },
  ctaSection: {
    marginHorizontal: 16,
    marginVertical: 32,
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  ctaTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: Colors.gray[900],
    marginBottom: 16,
    textAlign: 'center',
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    gap: 8,
  },
  ctaButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});