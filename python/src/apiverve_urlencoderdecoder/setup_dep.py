from setuptools import setup, find_packages

setup(
    name='apiverve_urlencoderdecoder',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='URL Encoder/Decoder converts text into percent-encoded strings or decodes existing URL components back into plain text. Pass any string with an encode or decode action to receive the processed output and your original text.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/urlencode?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
