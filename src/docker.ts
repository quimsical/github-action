class Docker {
  readonly repository = 'renovate/renovate';
  // renovate: datasource=docker depName=renovate/renovate versioning=docker
  readonly tag = '34.78.0-slim';
  readonly tagSuffix = '-slim';

  image(): string {
    return `${this.repository}:${this.tag}`;
  }

  version(): string {
    return this.tag.replace(this.tagSuffix, '');
  }
}

export default Docker;
