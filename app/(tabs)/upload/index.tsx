import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { CloudUpload as UploadCloud, FileText, X, CircleAlert as AlertCircle, ArrowRight } from 'lucide-react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as WebBrowser from 'expo-web-browser';
import Colors from '@/constants/Colors';
import { Card } from '@/components/ui/Card';
import JobDescriptionInput from '@/components/upload/JobDescriptionInput';
import FilePreview from '@/components/upload/FilePreview';

export default function UploadScreen() {
  const router = useRouter();
  const [file, setFile] = useState<DocumentPicker.DocumentPickerAsset | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [error, setError] = useState<string | null>(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'],
        copyToCacheDirectory: true,
      });
      
      if (result.canceled) {
        return;
      }
      
      // Check file size (max 5MB)
      const fileSize = result.assets[0].size || 0;
      if (fileSize > 5 * 1024 * 1024) {
        setError('File size exceeds 5MB limit');
        return;
      }
      
      setFile(result.assets[0]);
      setError(null);
    } catch (err) {
      console.error('Error picking document:', err);
      setError('Failed to upload file. Please try again.');
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const handleSubmit = () => {
    if (!file) {
      setError('Please upload your resume');
      return;
    }
    
    // Navigate to analysis screen (in real app, we'd send to API first)
    router.push('/analysis');
  };
  
  const openExampleResume = async () => {
    try {
      await WebBrowser.openBrowserAsync('https://www.resumebuilder.com/wp-content/uploads/2020/02/Software-Engineer-Resume-Example-for-2020.pdf');
    } catch (error) {
      console.error('Error opening example:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Resume Checker</Text>
        <Text style={styles.subtitle}>Upload your resume and get AI-powered feedback</Text>
        
        <Card style={styles.uploadCard}>
          {!file ? (
            <TouchableOpacity style={styles.uploadArea} onPress={pickDocument}>
              <View style={styles.uploadIconContainer}>
                <UploadCloud size={32} color={Colors.primary} />
              </View>
              <Text style={styles.uploadText}>Upload your resume</Text>
              <Text style={styles.uploadSubtext}>PDF, DOCX, or TXT (Max 5MB)</Text>
              <TouchableOpacity style={styles.uploadButton} onPress={pickDocument}>
                <Text style={styles.uploadButtonText}>Select File</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={openExampleResume}>
                <Text style={styles.exampleLink}>See example resume</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ) : (
            <FilePreview file={file} onRemove={removeFile} />
          )}
        </Card>
        
        {error && (
          <View style={styles.errorContainer}>
            <AlertCircle size={16} color={Colors.error} />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        
        <Text style={styles.sectionTitle}>Job Description (Optional)</Text>
        <Text style={styles.sectionSubtitle}>
          Add a job description to match your resume against specific requirements
        </Text>
        
        <JobDescriptionInput
          value={jobDescription}
          onChangeText={setJobDescription}
        />
        
        <TouchableOpacity 
          style={[styles.submitButton, !file && styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={!file}
        >
          <Text style={styles.submitButtonText}>Analyze Resume</Text>
          <ArrowRight size={20} color="#FFFFFF" />
        </TouchableOpacity>
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
  uploadCard: {
    marginBottom: 24,
    padding: 0,
    overflow: 'hidden',
  },
  uploadArea: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: Colors.gray[300],
    borderRadius: 12,
    backgroundColor: Colors.gray[50],
  },
  uploadIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primary_light,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  uploadText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.gray[900],
    marginBottom: 8,
  },
  uploadSubtext: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    marginBottom: 24,
  },
  uploadButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
  uploadButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  exampleLink: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.error_light,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 24,
    gap: 8,
  },
  errorText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.error,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: Colors.gray[900],
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
    marginBottom: 16,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 32,
    gap: 8,
  },
  submitButtonDisabled: {
    backgroundColor: Colors.gray[400],
  },
  submitButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});