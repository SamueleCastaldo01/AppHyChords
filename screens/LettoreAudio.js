import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';

const AudioPlayer = () => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/tuo_file.wav')
      );
      setSound(sound);

      sound.setOnPlaybackStatusUpdate((status) => {
        setIsPlaying(status.isPlaying);
        setPosition(status.positionMillis);
        setDuration(status.durationMillis);
      });
    };

    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const handlePlayPause = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
    }
  };

  const handleStop = async () => {
    if (sound) {
      await sound.stopAsync();
    }
  };

  const handleSliderChange = (value) => {
    if (sound) {
      sound.setPositionAsync(value);
    }
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = milliseconds / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={{marginTop:200, flexDirection:  "row", }}>
     <TouchableOpacity onPress={handlePlayPause} disabled={!sound}>
        {!isPlaying ? <Entypo name="controller-play" size={24} color="black" /> :
        <AntDesign name="pause" size={24} color="black" />
        }
        </TouchableOpacity>
      <Text>{`${formatTime(position)}`}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onSlidingComplete={(value) => handleSliderChange(value)}
        disabled={!sound}
      />
      <Text>{`${formatTime(duration)}`}</Text>
        <TouchableOpacity onPress={handleStop} disabled={!sound}>
          <Text> Return</Text>
        </TouchableOpacity>
    </View>
  );
};

export default AudioPlayer;