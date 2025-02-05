import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by error boundary", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{ padding: '20px', backgroundColor: '#f8f8f8', border: '1px solid #ccc' }}>
          <h1>Something went wrong.</h1>
          <p style={{ color: 'red' }}>An error occurred that prevented the page from loading.</p>
          <p>Please try disabling browser extensions, especially if you are seeing errors related to 'chrome-extension://egjidjbpglichdcondbcbdnbeeppgdph/'.</p>
          <details style={{ whiteSpace: 'pre-wrap', marginTop: '10px' }}>
            {this.state.error && this.state.errorInfo &&
              <>
                <summary>Error Details</summary>
                {this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </>
            }
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
