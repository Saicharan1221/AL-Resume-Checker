import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FileText, ArrowLeft, Download, CircleCheck as CheckCircle2, TriangleAlert as AlertTriangle, Circle as XCircle } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import { Card } from '@/components/ui/Card';
import ScoreCircle from '@/components/analysis/ScoreCircle';
import SuggestionItem from '@/components/analysis/SuggestionItem';
import ResumePreview from '@/components/analysis/ResumePreview';

export default function AnalysisScreen() {
  const router = useRouter();
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={20} color={Colors.gray[700]} />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>Resume Analysis</Text>
            <Text style={styles.subtitle}>Results for resume_john_doe.pdf</Text>
          </View>
          
          <TouchableOpacity style={styles.downloadButton}>
            <Download size={18} color="#FFFFFF" />
            <Text style={styles.downloadButtonText}>Download Report</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.scoreOverview}>
          <Card style={styles.scoreCard}>
            <ScoreCircle score={76} />
            <Text style={styles.scoreLabel}>Overall Score</Text>
          </Card>
          
          <View style={styles.scoresGrid}>
            <Card style={styles.miniScoreCard}>
              <View style={styles.scoreIconContainer}>
                <CheckCircle2 size={16} color={Colors.success} />
              </View>
              <Text style={styles.miniScoreValue}>82/100</Text>
              <Text style={styles.miniScoreLabel}>Structure</Text>
            </Card>
            
            <Card style={styles.miniScoreCard}>
              <View style={styles.scoreIconContainer}>
                <AlertTriangle size={16} color={Colors.warning} />
              </View>
              <Text style={styles.miniScoreValue}>68/100</Text>
              <Text style={styles.miniScoreLabel}>Keywords</Text>
            </Card>
            
            <Card style={styles.miniScoreCard}>
              <View style={styles.scoreIconContainer}>
                <XCircle size={16} color={Colors.error} />
              </View>
              <Text style={styles.miniScoreValue}>58/100</Text>
              <Text style={styles.miniScoreLabel}>ATS</Text>
            </Card>
            
            <Card style={styles.miniScoreCard}>
              <View style={styles.scoreIconContainer}>
                <CheckCircle2 size={16} color={Colors.success} />
              </View>
              <Text style={styles.miniScoreValue}>90/100</Text>
              <Text style={styles.miniScoreLabel}>Format</Text>
            </Card>
          </View>
        </View>
        
        <Card style={styles.suggestionCard}>
          <Text style={styles.cardTitle}>Key Suggestions</Text>
          
          <SuggestionItem 
            type="error"
            title="Add more keywords from the job description"
            description="Your resume is missing key terms like 'CI/CD', 'Kubernetes', and 'Docker'"
          />
          
          <SuggestionItem 
            type="warning"
            title="Improve your skills section"
            description="Use bullet points to list your technical skills for better readability"
          />
          
          <SuggestionItem 
            type="success"
            title="Great job with quantifiable achievements"
            description="You've effectively used numbers to demonstrate impact"
          />
          
          <SuggestionItem 
            type="info"
            title="Consider adding a summary section"
            description="A brief professional summary can highlight your expertise"
          />
        </Card>
        
        <Card style={styles.resumeCard}>
          <Text style={styles.cardTitle}>Resume Preview</Text>
          <Text style={styles.cardSubtitle}>Issues are highlighted in the text below</Text>
          
          <ResumePreview />
        </Card>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/upload')}>
            <Text style={styles.actionButtonText}>Upload New Resume</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.actionButton, styles.primaryActionButton]}
            onPress={() => router.push('/home')}
          >
            <Text style={styles.primaryActionButtonText}>Go to Dashboard</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    padding: 24,
    maxWidth: 800,
    width: '100%',
    alignSelf: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[700],
    marginLeft: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
    flexWrap: 'wrap',
    gap: 16,
  },
  headerLeft: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: Colors.gray[900],
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.gray[600],
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  downloadButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
  scoreOverview: {
    marginBottom: 24,
  },
  scoreCard: {
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
  },
  scoreLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[700],
    marginTop: 16,
  },
  scoresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  miniScoreCard: {
    flex: 1,
    minWidth: 120,
    padding: 16,
    alignItems: 'center',
  },
  scoreIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  miniScoreValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: Colors.gray[900],
    marginBottom: 4,
  },
  miniScoreLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
  },
  suggestionCard: {
    marginBottom: 24,
    padding: 24,
  },
  resumeCard: {
    marginBottom: 32,
    padding: 24,
  },
  cardTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.gray[900],
    marginBottom: 8,
  },
  cardSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    marginBottom: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
    flexWrap: 'wrap',
  },
  actionButton: {
    flex: 1,
    backgroundColor: Colors.gray[200],
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 150,
  },
  actionButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[800],
  },
  primaryActionButton: {
    backgroundColor: Colors.primary,
  },
  primaryActionButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
});