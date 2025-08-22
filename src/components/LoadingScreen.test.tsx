import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LoadingScreen } from './LoadingScreen';

// Mock timers
beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('LoadingScreen', () => {
  it('should call onComplete after timeout duration', async () => {
    const onComplete = jest.fn();
    
    render(
      <LoadingScreen
        isVisible={true}
        onComplete={onComplete}
        timeoutDuration={7000}
      />
    );

    // Fast-forward to just before timeout
    jest.advanceTimersByTime(6999);
    expect(onComplete).not.toHaveBeenCalled();

    // Advance to timeout
    jest.advanceTimersByTime(1);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('should show skip button after 3 seconds', () => {
    render(
      <LoadingScreen
        isVisible={true}
        onComplete={jest.fn()}
      />
    );

    // Initially skip button should not be visible
    expect(screen.queryByText(/skip/i)).not.toBeInTheDocument();

    // Advance time by 3 seconds
    jest.advanceTimersByTime(3000);

    // Skip button should now be visible
    expect(screen.getByText(/skip/i)).toBeInTheDocument();
  });

  it('should complete loading normally before timeout', () => {
    const onComplete = jest.fn();
    
    render(
      <LoadingScreen
        isVisible={true}
        onComplete={onComplete}
        timeoutDuration={7000}
      />
    );

    // Allow normal loading to complete (usually takes ~4-5 seconds)
    jest.advanceTimersByTime(5000);
    
    // Should have completed normally
    expect(onComplete).toHaveBeenCalled();
  });

  it('should cleanup timers on unmount', () => {
    const { unmount } = render(
      <LoadingScreen
        isVisible={true}
        onComplete={jest.fn()}
      />
    );

    // Unmount component
    unmount();

    // Should not throw any errors and timers should be cleaned up
    jest.advanceTimersByTime(10000);
  });
});