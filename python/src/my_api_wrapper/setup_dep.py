from setuptools import setup, find_packages

setup(
    name='apiverve_urlencoder/decoder',
    version='1.1.12',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='URL Encoder/Decoder is a tool for encoding and decoding URL strings. It converts special characters to percent-encoded format and decodes them back for safe URL transmission.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
