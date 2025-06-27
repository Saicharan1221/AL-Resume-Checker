import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { File, X } from 'lucide-react-native';
import * as DocumentPicker from 'expo-document-picker';
import Colors from '@/constants/Colors';

interface FilePreviewProps {
  file: DocumentPicker.DocumentPickerAsset;
  onRemove: () => void;
}

export default function FilePreview({ file, onRemove }: FilePreviewProps) {
  // Format file size
  const formatFileSize = (bytes: number | undefined): string => {
    if (!bytes) return '0 KB';
    
    const kilobytes = bytes / 1024;
    if (kilobytes < 1024) {
      return `${Math.round(kilobytes * 10) / 10} KB`;
    } else {
      const megabytes = kilobytes / 1024;
      return `${Math.round(megabytes * 10) / 10} MB`;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.fileInfo}>
        <View style={styles.fileIconContainer}>
          <File size={24} color={Colors.primary} />
        </View>
        
        <View style={styles.fileDetails}>
          <Text style={styles.fileName} numberOfLines={1}>
            {file.name}
          </Text>
          <Text style={styles.fileSize}>
            {formatFileSize(file.size)}
          </Text>
        </View>
        
        <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
          <X size={20} color={Colors.gray[600]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray[50],
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  fileIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: Colors.primary_light,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  fileDetails: {
    flex: 1,
  },
  fileName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.gray[900],
    marginBottom: 4,
  },
  fileSize: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.gray[600],
  },
  removeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.gray[200],
    justifyContent: 'center',
    alignItems: 'center',
  },
});