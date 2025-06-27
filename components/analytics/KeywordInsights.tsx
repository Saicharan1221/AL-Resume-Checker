import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '@/constants/Colors';

export default function KeywordInsights() {
  // This would be connected to real data in a full implementation
  
  // Keywords detected in the resume
  const keywords = [
    { name: 'React', count: 6, isMatch: true },
    { name: 'JavaScript', count: 5, isMatch: true },
    { name: 'TypeScript', count: 3, isMatch: true },
    { name: 'Node.js', count: 4, isMatch: true },
    { name: 'REST API', count: 2, isMatch: true },
    { name: 'MongoDB', count: 1, isMatch: false },
  ];
  
  // Keywords missing from resume but present in job description
  const missingKeywords = [
    'CI/CD',
    'Kubernetes',
    'Docker',
    'AWS',
    'Agile',
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Keywords Found</Text>
        <View style={styles.keywordsGrid}>
          {keywords.map((keyword, index) => (
            <View 
              key={index} 
              style={[
                styles.keywordTag, 
                keyword.isMatch && styles.keywordTagMatch
              ]}
            >
              <Text 
                style={[
                  styles.keywordText, 
                  keyword.isMatch && styles.keywordTextMatch
                ]}
              >
                {keyword.name} ({keyword.count})
              </Text>
            </View>
          ))}
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Missing Keywords</Text>
        <View style={styles.keywordsGrid}>
          {missingKeywords.map((keyword, index) => (
            <View key={index} style={styles.missingKeywordTag}>
              <Text style={styles.missingKeywordText}>{keyword}</Text>
            </View>
          ))}
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Keyword Density</Text>
        <View style={styles.densityMeter}>
          <View style={styles.densityBar}>
            <View style={[styles.densityFill, { width: '68%' }]} />
          </View>
          <View style={styles.densityLabels}>
            <Text style={styles.densityLabel}>Low</Text>
            <Text style={styles.densityLabel}>Optimal</Text>
            <Text style={styles.densityLabel}>High</Text>
          </View>
        </View>
        <Text style={styles.densityTip}>
          Your keyword density is good but could use more relevant industry terms.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.gray[800],
    marginBottom: 12,
  },
  keywordsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  keywordTag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: Colors.gray[100],
    borderRadius: 16,
  },
  keywordTagMatch: {
    backgroundColor: Colors.primary_light,
  },
  keywordText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.gray[700],
  },
  keywordTextMatch: {
    color: Colors.primary,
  },
  missingKeywordTag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: Colors.error_light,
    borderRadius: 16,
  },
  missingKeywordText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.error,
  },
  densityMeter: {
    marginTop: 8,
    marginBottom: 12,
  },
  densityBar: {
    height: 12,
    backgroundColor: Colors.gray[200],
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 8,
  },
  densityFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 6,
  },
  densityLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  densityLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.gray[600],
  },
  densityTip: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[700],
    marginTop: 8,
  },
});