import { connect } from 'react-redux';
import { FooterTabs } from '!/components';
import { setFooterTab } from '!/redux/modules/activeFooterTab';

const mapStateToProps = ({activeFooterTab}, props) => ({
	activeFooterTab,
	...props
});

// Good Example of Using mapDispatch to Props without using bindActionCreators from redux
const mapDispatchToProps = (dispatch) => ({
	onTabSelect: (tab) => dispatch(setFooterTab(tab))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FooterTabs)