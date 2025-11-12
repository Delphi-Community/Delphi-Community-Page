import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Admonition from '@theme/Admonition';
import styles from './index.module.css';

// Demo data for packages
const demoPackages = [
  {
    id: 1,
    name: '@delphi/core',
    description: 'Core Delphi runtime and utilities',
    stars: 1250,
    version: '1.2.3',
    lastUpdated: '2 days ago',
    tags: ['Delphi', 'Free Pascal']
  },
  {
    id: 2,
    name: '@delphi/ui-components',
    description: 'Modern UI components for Delphi applications',
    stars: 890,
    version: '2.1.0',
    lastUpdated: '1 week ago',
    tags: ['Delphi', 'Lazarus']
  },
  {
    id: 3,
    name: '@delphi/database',
    description: 'Database connectivity and ORM tools',
    stars: 2100,
    version: '1.5.2',
    lastUpdated: '3 days ago',
    tags: ['Free Pascal', 'Delphi']
  },
  {
    id: 4,
    name: '@delphi/networking',
    description: 'HTTP client and networking utilities',
    stars: 750,
    version: '1.0.8',
    lastUpdated: '5 days ago',
    tags: ['Lazarus', 'Free Pascal']
  },
  {
    id: 5,
    name: '@delphi/crypto',
    description: 'Cryptographic functions and security tools',
    stars: 450,
    version: '1.3.1',
    lastUpdated: '1 week ago',
    tags: ['Delphi']
  },
  {
    id: 6,
    name: '@delphi/json-parser',
    description: 'Fast JSON parsing and serialization',
    stars: 1800,
    version: '2.0.1',
    lastUpdated: '4 days ago',
    tags: ['Free Pascal', 'Lazarus']
  },
  {
    id: 7,
    name: '@delphi/file-system',
    description: 'Advanced file system operations',
    stars: 650,
    version: '1.1.4',
    lastUpdated: '6 days ago',
    tags: ['Delphi', 'Free Pascal', 'Lazarus']
  },
  {
    id: 8,
    name: '@delphi/threading',
    description: 'Threading utilities and async operations',
    stars: 950,
    version: '1.4.0',
    lastUpdated: '2 days ago',
    tags: ['Free Pascal']
  }
];

// TagFilterModal Component
function TagFilterModal({ isOpen, onClose, tags, selectedTags, onTagToggle, onApply }) {
  const getTagColor = (tag) => {
    switch (tag) {
      case 'Free Pascal':
        return '#253183';
      case 'Delphi':
        return '#ee2a38';
      case 'Lazarus':
        return '#92278f';
      default:
        return '#666';
    }
  };


  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>Filter by Tags</h3>
          <button 
            className={styles.cleanBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        
        <div className={styles.modalBody}>
          <p>Select the tags you want to filter by:</p>
          
          <div className={styles.tagButtons}>
            {/* Free Pascal Tag */}
            <button
              className="button button--outline"
              onClick={() => onTagToggle('Free Pascal')}
              style={selectedTags.includes('Free Pascal') ? {
                backgroundColor: '#253183',
                borderColor: '#253183',
                color: 'white'
              } : {
                borderColor: '#253183',
                color: '#253183'
              }}
            >
              Free Pascal
            </button>

            {/* Delphi Tag */}
            <button
              className="button button--outline"
              onClick={() => onTagToggle('Delphi')}
              style={selectedTags.includes('Delphi') ? {
                backgroundColor: '#ee2a38',
                borderColor: '#ee2a38',
                color: 'white'
              } : {
                borderColor: '#ee2a38',
                color: '#ee2a38'
              }}
            >
              Delphi
            </button>

            {/* Lazarus Tag */}
            <button
              className="button button--outline"
              onClick={() => onTagToggle('Lazarus')}
              style={selectedTags.includes('Lazarus') ? {
                backgroundColor: '#92278f',
                borderColor: '#92278f',
                color: 'white'
              } : {
                borderColor: '#92278f',
                color: '#92278f'
              }}
            >
              Lazarus
            </button>
          </div>
          
          <div className={styles.modalActions}>
            <button
              className="button button--outline"
              onClick={() => {
                onTagToggle(''); // Clear all selections
                onApply();
                onClose();
              }}
            >
              Clear All
            </button>
            <button
              className="button button--primary"
              onClick={() => {
                onApply();
                onClose();
              }}
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// TagFilterTrigger Component
function TagFilterTrigger({ selectedTags, onClick }) {
  return (
    <div>
      <button 
        className="button button--secondary" 
        onClick={onClick}
      >
        {selectedTags.length === 0 ? (
          "Select tags..."
        ) : (
          selectedTags.join(", ")
        )}
        <span className="margin-left--sm">▼</span>
      </button>
    </div>
  );
}

function PackageItem({ package: pkg }) {
  const getTagColor = (tag) => {
    switch (tag) {
      case 'Free Pascal':
        return '#253183';
      case 'Delphi':
        return '#ee2a38';
      case 'Lazarus':
        return '#92278f';
      default:
        return '#666';
    }
  };

  return (
    <div className="card margin-bottom--md">
      <div className="card__body">
        <div className="row">
          <div className="col col--10">
            <h3 className="margin-bottom--sm">{pkg.name}</h3>
            <p className="margin-bottom--sm">{pkg.description}</p>
            <div className="text--sm text--muted">
              <span className="margin-right--md">v{pkg.version}</span>
              <span className="margin-right--md">⭐ {pkg.stars} stars</span>
              <span>Updated {pkg.lastUpdated}</span>
            </div>
          </div>
          <div className="col col--2 text--right">
            <div>
              {pkg.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="badge margin-right--xs"
                  style={{ 
                    backgroundColor: getTagColor(tag),
                    color: 'white'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PackageManager() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('Stars');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const packagesPerPage = 5;
  
  // Get all unique tags
  const allTags = [...new Set(demoPackages.flatMap(pkg => pkg.tags))];
  
  
  // Filter packages based on search term and selected tags
  const filteredPackages = demoPackages.filter(pkg => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTags = selectedTags.length === 0 || 
                        selectedTags.some(tag => pkg.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });
  
  // Sort packages
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case 'Stars':
        return b.stars - a.stars;
      case 'Latest Updated':
        // Simple sorting by last updated (in real app, you'd parse dates)
        const aDays = parseInt(a.lastUpdated.match(/\d+/)?.[0] || '0');
        const bDays = parseInt(b.lastUpdated.match(/\d+/)?.[0] || '0');
        return aDays - bDays;
      default:
        return 0;
    }
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(sortedPackages.length / packagesPerPage);
  const startIndex = (currentPage - 1) * packagesPerPage;
  const endIndex = startIndex + packagesPerPage;
  const currentPackages = sortedPackages.slice(startIndex, endIndex);
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };
  
  const handleTagToggle = (tag) => {
    if (tag === '') {
      // Clear all tags
      setSelectedTags([]);
    } else {
      setSelectedTags(prev => 
        prev.includes(tag) 
          ? prev.filter(t => t !== tag)
          : [...prev, tag]
      );
    }
  };
  
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  
  const handleApplyFilters = () => {
    setCurrentPage(1); // Reset to first page when filtering
  };
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1); // Reset to first page when sorting
  };

  return (
    <Layout
      title="Package Manager"
      description="Delphi Package Manager - Manage your Delphi packages">
      <div className="container margin-vert--lg">
        <div className="row">
              <div className="col col--12">
                <h1 style={{ marginBottom: '24px' }}>Explore Packages</h1>
                
                <Admonition type="caution" title="Alpha Status">
                  This Package Manager is currently in alpha. Features and functionality may change significantly in future updates.
                </Admonition>
            
            {/* Search Bar */}
            <div style={{ marginBottom: '24px' }}>
              <input
                type="text"
                placeholder="Search for packages"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '16px',
                  border: '1px solid var(--ifm-color-emphasis-300)',
                  borderRadius: '8px',
                  backgroundColor: 'var(--ifm-background-color)',
                  color: 'var(--ifm-font-color-base)',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--ifm-color-primary)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--ifm-color-emphasis-300)';
                }}
              />
            </div>
            
            {/* Filters */}
            <div className="card margin-bottom--lg">
              <div className="card__body">
                <div className="row">
                  <div className="col col--6">
                    <TagFilterTrigger 
                      selectedTags={selectedTags}
                      onClick={handleModalOpen}
                    />
                  </div>
                  <div className="col col--6">
                    <div className="text--right">
                      <select
                        className="button button--secondary"
                        value={sortBy}
                        onChange={handleSortChange}
                      >
                        <option value="Stars">Stars</option>
                        <option value="Latest Updated">Latest Updated</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {(selectedTags.length > 0 || sortBy !== 'Stars') && (
                  <div className="text--center margin-top--md">
                    <button
                      className="button button--secondary"
                      onClick={() => {
                        setSelectedTags([]);
                        setSortBy('Stars');
                        setCurrentPage(1);
                      }}
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Package List */}
            <div className="margin-bottom--lg">
              {currentPackages.map(pkg => (
                <PackageItem key={pkg.id} package={pkg} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="row">
              <div className="col col--6">
                <p className="text--sm text--muted">
                  Showing {startIndex + 1} to {Math.min(endIndex, sortedPackages.length)} results, out of {sortedPackages.length}
                </p>
              </div>
              <div className="col col--6 text--right">
                <button
                  className="button button--outline button--sm margin-right--sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  className="button button--primary button--sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
            
            {/* Footer info */}
            <div className="text--center margin-top--lg">
              <p className="text--xs text--muted">
                Changes made in the last 15 minutes may not be visible yet. Packages with no published versions are not shown.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tag Filter Modal */}
      <TagFilterModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        tags={allTags}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
        onApply={handleApplyFilters}
      />
    </Layout>
  );
}

export default PackageManager;
