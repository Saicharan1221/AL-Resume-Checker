import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { Clipboard, SquareCheck as CheckSquare } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface JobDescriptionInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function JobDescriptionInput({ 
  value, 
  onChangeText 
}: JobDescriptionInputProps) {
  const handlePaste = async () => {
    try {
      // Platform-specific clipboard access would be implemented here
      // For demo purposes, we're just adding placeholder text
      onChangeText(`We're looking for a Software Engineer with 5+ years of experience in React, Node.js, and cloud technologies. The ideal candidate should have experience with CI/CD pipelines, Kubernetes, and Docker.`);
    } catch (err) {
      console.error('Failed to paste from clipboard');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputHeader}>
        <View style={styles.inputHeaderLeft}>
          <Text style={styles.inputLabel}>Job Description</Text>
        </View>
        <TouchableOpacity style={styles.pasteButton} onPress={handlePaste}>
          <Clipboard size={16} color={Colors.primary} />
          <Text style={styles.pasteButtonText}>Paste</Text>
        </TouchableOpacity>
      </View>
      
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={6}
        placeholder="Enter job description to match your resume against specific requirements..."
        placeholderTextColor={Colors.gray[400]}
        value={value}
        onChangeText={onChangeText}
      />
      
      <View style={styles.tipContainer}>
        <CheckSquare size={16} color={Colors.primary} />
        <Text style={styles.tipText}>
          Adding a job description helps tailor recommendations to the specific role
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  inputHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  inputHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray[800],
  },
  pasteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: Colors.primary_light,
    gap: 6,
  },
  pasteButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.primary,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: Colors.gray[300],
    borderRadius: 8,
    padding: 12,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.gray[900],
    textAlignVertical: 'top',
    minHeight: 150,
  },
  tipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },
  tipText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    flex: 1,
  },
});