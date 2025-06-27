import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ChartBar as BarChart2, TrendingUp, Calendar } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import { Card } from '@/components/ui/Card';
import EmptyState from '@/components/ui/EmptyState';
import ResumeScoreHistory from '@/components/analytics/ResumeScoreHistory';
import KeywordInsights from '@/components/analytics/KeywordInsights';

export default function AnalyticsScreen() {
  // For demo purposes, we'll show an empty state
  const hasAnalytics = false;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Resume Analytics</Text>
        <Text style={styles.subtitle}>Track your resume performance over time</Text>
        
        {!hasAnalytics ? (
          <EmptyState
            icon={<BarChart2 size={48} color={Colors.gray[400]} />}
            title="No analytics yet"
            description="Upload and analyze your resume to see insights and performance metrics"
            actionLabel="Check Resume"
            actionLink="/upload"
          />
        ) : (
          <>
            <View style={styles.statsRow}>
              <Card style={styles.statCard}>
                <View style={styles.statIconContainer}>
                  <TrendingUp size={20} color={Colors.success} />
                </View>
                <Text style={styles.statValue}>78/100</Text>
                <Text style={styles.statLabel}>Latest Score</Text>
              </Card>
              
              <Card style={styles.statCard}>
                <View style={styles.statIconContainer}>
                  <BarChart2 size={20} color={Colors.primary} />
                </View>
                <Text style={styles.statValue}>+12%</Text>
                <Text style={styles.statLabel}>Improvement</Text>
              </Card>
              
              <Card style={styles.statCard}>
                <View style={styles.statIconContainer}>
                  <Calendar size={20} color={Colors.secondary} />
                </View>
                <Text style={styles.statValue}>4</Text>
                <Text style={styles.statLabel}>Analyses</Text>
              </Card>
            </View>
            
            <Card style={styles.chartCard}>
              <Text style={styles.cardTitle}>Score History</Text>
              <ResumeScoreHistory />
            </Card>
            
            <Card style={styles.chartCard}>
              <Text style={styles.cardTitle}>Keyword Insights</Text>
              <KeywordInsights />
            </Card>
          </>
        )}
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
    marginBottom: 32,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    minWidth: 140,
    padding: 16,
    alignItems: 'center',
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: Colors.gray[900],
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
  },
  chartCard: {
    marginBottom: 24,
    padding: 24,
  },
  cardTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.gray[900],
    marginBottom: 16,
  },
});