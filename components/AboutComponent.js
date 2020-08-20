import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
const mapStateToProps = state => {
    return {
      partners: state.partners
    };
};

function Mission(){
    return (
        <Card title='Our Mission'>
            <Text style={{margin:10}}>We preset a curated database of the best campsites in teh vast woods and backcountry of the World Wide Web Wilderness.
             We increase access to adventure for the public while promoting safe and respectful use of resources.The expert wilderness trekkers I dont know how this import 
             thing is making any sense. So we excel sheet our way up to the pot top.</Text>

        </Card>
    )
}
class About extends Component{
   

    static navigationOptions={
        title: 'About Us'
    }
    render() {
        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            );
        };

        if (this.props.partners.isLoading) {
            return (
                <ScrollView>
                    <Mission />
                    <Card
                        title='Community Partners'>
                        <Loading />
                    </Card>
                </ScrollView>
            );
        }
        if (this.props.partners.errMess) {
            return (
                <ScrollView>
                    <Mission />
                    <Card
                        title='Community Partners'>
                        <Text>{this.props.partners.errMess}</Text>
                    </Card>
                </ScrollView>
            );
        }
        return (
            
<ScrollView><Mission>
    </Mission>
    
    <Card title='Community Partners'>
        <FlatList
        data={this.props.partners.partners}
        keyExtractor={item => item.id.toString()}
        renderItem={renderPartner}></FlatList>
        </Card></ScrollView>    
)
}
}
export default connect(mapStateToProps)(About);